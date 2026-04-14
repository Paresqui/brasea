'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle, ChevronDown, Loader2 } from 'lucide-react'
import { submitWaitlist, initialState } from '@/app/actions/waitlist'

const INPUT_CLASS =
  'w-full h-11 bg-[#2e2b28] border border-white/10 rounded-lg px-3.5 text-sm text-brasea-cream ' +
  'placeholder:text-brasea-cream/35 focus:outline-none focus:ring-2 focus:ring-brasea-terracota/60 ' +
  'transition-shadow duration-150 min-h-[44px]'

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="text-red-400 text-xs mt-1">{message}</p>
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      aria-label="Entrar na lista de espera e garantir preço fundador"
      className="w-full h-14 min-h-[44px] flex items-center justify-center gap-2 rounded-lg bg-brasea-terracota hover:bg-brasea-terra-mid text-brasea-cream font-semibold text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brasea-terracota disabled:opacity-70 disabled:cursor-not-allowed shadow-[0px_4px_24px_0px_rgba(197,109,59,0.25)]"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
          Enviando...
        </>
      ) : (
        'Entrar na lista de espera e garantir preço fundador'
      )}
    </button>
  )
}

/**
 * WaitlistForm — formulário de captura de leads para lista de espera do Brasea.
 * Gerenciado via Server Action com feedback de sucesso/erro inline.
 */
export function WaitlistForm() {
  const [state, formAction] = useActionState(submitWaitlist, initialState)

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25">
          <CheckCircle className="w-8 h-8 text-green-400" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-display font-semibold text-xl text-brasea-cream">
            Você está na lista!
          </p>
          <p className="text-brasea-cream/60 text-sm">
            Confira seu e-mail{state.email ? ` (${state.email})` : ''} para a confirmação.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-4">
      {state.error && (
        <div
          role="alert"
          className="bg-red-500/15 border border-red-500/30 rounded-lg px-4 py-3 text-sm text-red-300"
        >
          {state.error}
        </div>
      )}

      {/* Nome + Sobrenome */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="wl-nome" className="sr-only">
            Nome
          </label>
          <input
            id="wl-nome"
            name="nome"
            type="text"
            placeholder="Seu nome"
            autoComplete="given-name"
            className={INPUT_CLASS}
          />
          <FieldError message={state.fieldErrors?.nome} />
        </div>
        <div>
          <label htmlFor="wl-sobrenome" className="sr-only">
            Sobrenome
          </label>
          <input
            id="wl-sobrenome"
            name="sobrenome"
            type="text"
            placeholder="Seu sobrenome"
            autoComplete="family-name"
            className={INPUT_CLASS}
          />
          <FieldError message={state.fieldErrors?.sobrenome} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="wl-email" className="sr-only">
          E-mail
        </label>
        <input
          id="wl-email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          autoComplete="email"
          className={INPUT_CLASS}
        />
        <FieldError message={state.fieldErrors?.email} />
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="wl-whatsapp" className="sr-only">
          WhatsApp
        </label>
        <input
          id="wl-whatsapp"
          name="whatsapp"
          type="tel"
          placeholder="(11) 99999-9999"
          autoComplete="tel"
          className={INPUT_CLASS}
        />
        <p className="text-brasea-cream/40 text-[11px] mt-1">
          Opcional — para aviso de lançamento
        </p>
      </div>

      {/* Perfil (select) */}
      <div>
        <label htmlFor="wl-perfil" className="sr-only">
          Perfil
        </label>
        <div className="relative">
          <select
            id="wl-perfil"
            name="perfil"
            defaultValue=""
            className={`${INPUT_CLASS} appearance-none pr-10 cursor-pointer`}
          >
            <option value="" disabled>
              Selecione seu perfil...
            </option>
            <option value="cozinheiro">Cozinheiro profissional / Operacional</option>
            <option value="estudante">Estudante de gastronomia</option>
            <option value="especialista">Especialista / Chef de estação</option>
            <option value="outro">Outro</option>
          </select>
          <ChevronDown
            className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brasea-cream/40 pointer-events-none"
            aria-hidden="true"
          />
        </div>
        <FieldError message={state.fieldErrors?.perfil} />
      </div>

      <SubmitButton />

      <p className="text-brasea-cream/40 text-[11px] text-center">
        ✅ Sem compromisso · você será avisado antes do lançamento
      </p>
    </form>
  )
}

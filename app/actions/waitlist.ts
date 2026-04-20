'use server'

import { getSupabaseServerClient } from '@/lib/supabase/server'
import type { WaitlistFormState } from '@/lib/waitlist/form-state'

export async function submitWaitlist(
  _prevState: WaitlistFormState,
  formData: FormData
): Promise<WaitlistFormState> {
  const nome = (formData.get('nome') as string | null)?.trim() ?? ''
  const sobrenome = (formData.get('sobrenome') as string | null)?.trim() ?? ''
  const email = (formData.get('email') as string | null)?.trim().toLowerCase() ?? ''
  const whatsapp = (formData.get('whatsapp') as string | null)?.trim() ?? ''
  const perfil = (formData.get('perfil') as string | null)?.trim() ?? ''

  const fieldErrors: WaitlistFormState['fieldErrors'] = {}

  if (nome.length < 2) fieldErrors.nome = 'Nome deve ter pelo menos 2 caracteres'
  if (sobrenome.length < 2) fieldErrors.sobrenome = 'Sobrenome deve ter pelo menos 2 caracteres'
  if (!email.includes('@') || !email.includes('.')) fieldErrors.email = 'Informe um e-mail válido'
  if (!perfil) fieldErrors.perfil = 'Selecione seu perfil'

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors }
  }

  try {
    const supabase = getSupabaseServerClient()

    const { error } = await supabase.from('waitlist').insert({
      nome,
      sobrenome,
      email,
      whatsapp: whatsapp || null,
      perfil,
    })

    if (error) {
      // 23505 = unique_violation (e-mail duplicado)
      if (error.code === '23505') {
        return { fieldErrors: { email: 'Este e-mail já está na lista de espera' } }
      }

      console.error('[waitlist] erro ao inserir no Supabase:', error)
      return { error: 'Erro ao enviar. Por favor, tente novamente em instantes.' }
    }

    // TODO: Enviar e-mail de confirmação via Resend

    return { success: true, email }
  } catch (err) {
    console.error('[waitlist] exceção:', err)
    return { error: 'Erro ao enviar. Por favor, tente novamente em instantes.' }
  }
}

'use server'

export type WaitlistFormState = {
  success?: boolean
  error?: string
  email?: string
  fieldErrors?: Partial<Record<'nome' | 'sobrenome' | 'email' | 'perfil', string>>
}

const initialState: WaitlistFormState = {}
export { initialState }

export async function submitWaitlist(
  _prevState: WaitlistFormState,
  formData: FormData
): Promise<WaitlistFormState> {
  const nome = (formData.get('nome') as string | null)?.trim() ?? ''
  const sobrenome = (formData.get('sobrenome') as string | null)?.trim() ?? ''
  const email = (formData.get('email') as string | null)?.trim() ?? ''
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
    // TODO: Inserir na tabela 'waitlist' do Supabase:
    //   { nome, sobrenome, email, whatsapp, perfil, created_at }
    // TODO: Enviar e-mail de confirmação via Resend

    console.log('[waitlist] nova inscrição:', { nome, sobrenome, email, whatsapp, perfil })

    return { success: true, email }
  } catch {
    return { error: 'Erro ao enviar. Por favor, tente novamente em instantes.' }
  }
}

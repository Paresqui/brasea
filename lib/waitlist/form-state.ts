/** Estado do formulário de lista de espera (client + server action). */

export type WaitlistFormState = {
  success?: boolean
  error?: string
  email?: string
  fieldErrors?: Partial<Record<'nome' | 'sobrenome' | 'email' | 'perfil', string>>
}

export const initialWaitlistState: WaitlistFormState = {}

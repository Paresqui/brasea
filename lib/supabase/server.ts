import 'server-only'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Cliente Supabase para uso exclusivo no servidor (Server Actions, Route Handlers).
 *
 * Usa a SUPABASE_SERVICE_ROLE_KEY, que IGNORA Row Level Security.
 * NUNCA importe este arquivo em componentes cliente ou exponha a chave no bundle.
 */

let cachedClient: SupabaseClient | null = null

export function getSupabaseServerClient(): SupabaseClient {
  if (cachedClient) return cachedClient

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new Error(
      'Supabase não configurado. Defina NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY no .env.local'
    )
  }

  cachedClient = createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })

  return cachedClient
}

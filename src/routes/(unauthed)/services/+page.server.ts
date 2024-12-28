import { serializeNonPOJOs } from '$lib/utils'
import {
  POCKETBASE_ADMIN_EMAIL,
  POCKETBASE_ADMIN_PASSWORD,
} from '$env/static/private'

export async function load({ locals }) {
  try {
    await locals.pb
      .collection('_superusers')
      .authWithPassword(POCKETBASE_ADMIN_EMAIL!, POCKETBASE_ADMIN_PASSWORD!)
    const services = await locals.pb.collection('services').getFullList({
      sort: 'created',
    })
    return {
      services: serializeNonPOJOs(services),
    }
  } catch (err) {
    console.error('Error:', err)
    return {
      services: [],
    }
  }
}

import { serializeNonPOJOs } from '$lib/utils'
import {
  POCKETBASE_ADMIN_EMAIL,
  POCKETBASE_ADMIN_PASSWORD,
} from '$env/static/private'

export async function load({ locals }) {
  console.log('Loading services')
  try {
    await locals.pb
      .collection('_superusers')
      .authWithPassword(POCKETBASE_ADMIN_EMAIL!, POCKETBASE_ADMIN_PASSWORD!)
    const services = await locals.pb.collection('services').getFullList({
      // sort: 'created',
    })
    console.log('Services loaded:', services)
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

import { AxiosResponse } from 'axios'
import { createDataAdapter } from '../../adapters'
import { FetcherAuth } from '../../types/fetch'
import { DataSelect } from '../../types/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getBrgs:FetcherAuth<Array<DataSelect>> = async (token) => {
  try {
    const { data } = await senergy.get('/brg/getBrgs', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<Array<DataSelect>>
    return createDataAdapter(data)
  } catch (err) {
    throw handleAxiosError(err)
  }
}

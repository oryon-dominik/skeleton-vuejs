import { Endpoint } from "./endpoints";
import { httpClient } from "./httpClient";

import { useApplication } from "../stores/application";


export type BackendAPIResponseMany = {
  count: number,
  next: string,
  previous: string,
  results: any[],
}

export type GetManyAPIReturned = {
  restResponse: BackendAPIResponseMany,
  error: null | any,
}


/**
 * Returns the api response -
 * Increments the loading state in the application store by one during each call.
 * @param route name of the endpoint
 * @param pk provide a primary-key for entity details
 * @param param query params for filtering the results
 * @returns queryResult the REST response with the list of objects and the error
 */
async function getMany(route: Endpoint, pk: string = "", parameters: string = ""): Promise<GetManyAPIReturned> {
  const application = useApplication()
  application.startLoading()
  const queryResult: GetManyAPIReturned = {
    restResponse: {
      count: 0,
      next: "",
      previous: "",
      results: [],
    },
    error: null
  };

  const url = route.concat(pk, parameters)
  try {
    const response = await httpClient.get(url);
    if (response.status == 200) {
      queryResult.restResponse = await response.data;
    }
  } catch (error) {
    queryResult.error = error;
  } finally {
    application.finishLoading()
  }
  return queryResult;
}

export { getMany };

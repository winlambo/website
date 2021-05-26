import { useState, useEffect } from "react"
import { useWeb3React } from "@web3-react/core"
import { injectedConnector } from "../utils/connectors"

export function useEagerConnect() {
  const { activate, active } = useWeb3React()

  const [tried, setTried] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    injectedConnector.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injectedConnector, undefined, true).catch((error) => {
          setError(error)
          setTried(true)
        })
      } else {
        setTried(true)
      }
    })
  }, [activate]) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [tried, active])

  return [tried, error]
}

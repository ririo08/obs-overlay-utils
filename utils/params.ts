export function useCustomParams() {
  interface CustomParams {
    key: string
    channelId: string
  }
  const encodeBase64 = (value: CustomParams): string => {
    const jsonString = JSON.stringify(value)
    const base64String = btoa(encodeURIComponent(jsonString))
    return base64String
  }

  const decodeBase64 = (base64: string): CustomParams => {
    const jsonString = decodeURIComponent(atob(base64))
    const obj = JSON.parse(jsonString)
    return obj
  }

  return {
    encodeBase64,
    decodeBase64,
  }
}

export const useSleep = async (sec: number) => {
  await new Promise((resolve) => setTimeout(resolve, sec * 1000))
}

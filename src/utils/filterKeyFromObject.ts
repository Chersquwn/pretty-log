export function filterKeyFromObject<K extends keyof T, T extends Partial<{ [key in K]: any }>, P extends Partial<{ [key in K]: any }>>(obj: T, name: string) {
  return (Object.keys(obj) as K[]).reduce((res, key) => {
    res[key] = obj[key][name]

    return res
  }, {} as P)
}

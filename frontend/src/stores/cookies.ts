import Cookies from 'js-cookie'

class CookieStorage extends Storage {
  setItem(key: string, value: string): string | undefined {
    const expire_in = new Date(new Date().getTime() + 24 * 60 * 60 * 1000) // 24 hours
    return Cookies.set(key, value, { expires: expire_in })
  }
  getItem(key: string): string | null {
    const value = Cookies.get(key)
    return value ? value : null
  }
}

export const cookieStorage = new CookieStorage()

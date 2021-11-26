// Fetching Data, pass endpoint url
export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${endpoint}`, { method: 'GET', mode: 'cors' })
  const data = await response.json()
  return data
}

// Whack out a date format
export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

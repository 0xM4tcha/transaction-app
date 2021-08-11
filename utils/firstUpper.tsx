const firstUpper = (string:string | undefined) => {
  return `${string?.charAt(0).toUpperCase()}${string?.slice(1)}`
}
export default firstUpper;
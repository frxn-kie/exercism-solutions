export function hey(message: string): string {
const trimmedMessage = message.trim()
if (trimmedMessage.length < 1) {
  return "Fine. Be that way!" 
} else if (trimmedMessage.match(/[A-Z]\?$/) && !trimmedMessage.match(/[a-z]/)) {
  return "Calm down, I know what I'm doing!"
} else if (trimmedMessage.match(/[A-Z]/) && !trimmedMessage.match(/[a-z]/)) {
  return "Whoa, chill out!"
} else if (trimmedMessage.match(/\?$/)) {
  return "Sure."
} else {
  return "Whatever."
}
}

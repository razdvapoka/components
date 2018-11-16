import * as emotion from 'emotion'
import renderer from 'react-test-renderer'
import { createSerializer } from 'jest-emotion'

const serializer = createSerializer(emotion)

const renderJSON = (element) => {
  const json = renderer.create(element).toJSON()

  if (serializer.test(json)) {
    const styles = serializer.print(json, (res) => '')
    return [
      styles.trim(),
      json
    ]
  }

  return json
}

export {
  renderJSON
}

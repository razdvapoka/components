import React from 'react'
import { isFn } from '@exah/utils'

const mapProps = (fn) => (Comp) => (props) => (
  <Comp {...fn(props)} />
)

const defaultProps = (data) => mapProps((props) => ({
  ...isFn(data) ? data(props) : data,
  ...props
}))

const withProps = (data) => mapProps((props) => ({
  ...props,
  ...isFn(data) ? data(props) : data
}))

const withDisplayName = (Comp, name) => Object.assign(Comp, {
  displayName: name
})

export {
  mapProps,
  defaultProps,
  withProps,
  withDisplayName
}

// @flow

import FormControl from '@material-ui/core/FormControl'

import FormHelperText from '@material-ui/core/FormHelperText'

import Input from '@material-ui/core/Input'

import InputLabel from '@material-ui/core/InputLabel'

import { withStyles } from '@material-ui/core/styles'

import React from 'react'

const styles = {}

class TextFieldWithError extends React.Component<{
  classes: Object,
  errorText: string,
  id: string,
  label: string,
  onChange: Function,
  value: string,
}> {
  render() {
    const { errorText, id, label, onChange, value } = this.props

    const isError = errorText !== ''

    // TODO [2 Crossroads][App Base] TextFieldWithError does not show outline border
    return (
      <FormControl
        error={isError}
        fullWidth={true}
        id={id}
        margin="dense"
        variant="outlined"
      >
        <InputLabel
          htmlFor={isError ? 'name-simple' : 'name-error'}
          margin="dense"
          variant="outlined"
        >
          {label}
        </InputLabel>
        <Input id="value" value={value} onChange={onChange} />
        <FormHelperText>{isError ? errorText : ''}</FormHelperText>
      </FormControl>
    )
  }
}

export default withStyles( styles )( TextFieldWithError )

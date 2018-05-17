// @flow

import FormControl from '@material-ui/core/FormControl'

import FormHelperText from '@material-ui/core/FormHelperText'

import Input from '@material-ui/core/Input'

import InputLabel from '@material-ui/core/InputLabel'

import { withStyles } from '@material-ui/core/styles'

import React from 'react'

const styles = theme => ({
  formControl: {
    marginBottom: theme.spacing.unit,
  },
})

class TextFieldWithError extends React.Component<{
  classes: Object,
  errorText: string,
  id: string,
  label: string,
  onChange: Function,
  value: string,
}> {
  render() {
    const { classes, errorText, id, label, onChange, value } = this.props

    const isError = errorText !== ''

    return (
      <FormControl className={classes.formControl} error={isError} id={id} fullWidth={true}>
        <InputLabel htmlFor={isError ? 'name-simple' : 'name-error'}>{label}</InputLabel>
        <Input id="value" value={value} onChange={onChange} />
        <FormHelperText>{isError ? errorText : ''}</FormHelperText>
      </FormControl>
    )
  }
}

export default withStyles( styles )( TextFieldWithError )

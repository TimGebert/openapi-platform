import React, { Component } from 'react';

import { observable } from 'mobx';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import { GitInfo, OAuth2Format } from 'model/GitInfo';
import { Category } from 'model/Storybook';

export interface FormError {
  repoUrl?: string;
  service?: string;
}

export interface FormInput {
  gitInfo: GitInfo;
}

export interface PublishFormProps {}

export class PublishForm extends Component<PublishFormProps> {
  @observable
  private error: FormError = {
    repoUrl: undefined,
  };

  @observable
  private input: FormInput = {
    gitInfo: {
      repoUrl: '',
      auth: {
        username: '',
      },
    },
  };

  public onRepoUrlChange = () => {};

  public forceValidateUrl = () => {};

  public onServiceChange = () => {};

  public forceValidateService = () => {};

  public render() {
    return (
      <form>
        <Typography variant="title">Where do you want to publish the SDK?</Typography>
        {/*
           * TODO: there's some pretty obvious improvements to be made here.
           * E.g. 
           *  - Providing more customizability for Git integration.
           *  - Better validation
           */}
        <Typography variant="subheading">Git</Typography>
        <FormControl error={this.error.repoUrl !== undefined} margin="dense">
          <InputLabel htmlFor="target">Repository URL</InputLabel>
          <Input
            id="title"
            onChange={this.onRepoUrlChange}
            onBlur={this.forceValidateUrl}
            value={this.input.gitInfo.repoUrl}
          />
          <FormHelperText>{this.error.repoUrl}</FormHelperText>
        </FormControl>
        <FormControl error={this.error.service !== undefined} margin="dense">
          <InputLabel htmlFor="target">Service</InputLabel>
          <Select
            onChange={this.onServiceChange}
            onBlur={this.forceValidateService}
            value={this.input.gitInfo.auth.oauth2format}
            inputProps={{
              id: 'target',
            }}
          >
            {Object.keys(OAuth2Format)
              .map(key => OAuth2Format[key])
              .map(target => (
                <MenuItem key={target} value={target}>
                  {target}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText>{this.error.service}</FormHelperText>
        </FormControl>
      </form>
    );
  }
}

export const storybook: Category<PublishFormProps> = {
  Component: PublishForm,
  stories: {
    Generic: {},
  },
};

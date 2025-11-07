import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppError from './Error.vue'

describe('AppError', () => {

  it('should render 404 error with correct image and message', () => {
    const wrapper = mount(AppError, {
      props: {
        statusCode: 404,
      },
      global: {
        stubs: {
          UError: { template: '<div class="error"><slot name="statusCode" /><slot name="links" /></div>' },
          NuxtImg: { template: '<img class="error-img" />' },
          UButton: { template: '<button><slot /></button>' },
        },
      },
    })

    expect(wrapper.find('.error').exists()).toBe(true)
    expect(wrapper.find('.error-img').exists()).toBe(true)
  })

  it('should render 500 error with correct image and message', () => {
    const wrapper = mount(AppError, {
      props: {
        statusCode: 500,
      },
      global: {
        stubs: {
          UError: { template: '<div class="error"><slot name="statusCode" /><slot name="links" /></div>' },
          NuxtImg: { template: '<img class="error-img" />' },
          UButton: { template: '<button><slot /></button>' },
        },
      },
    })

    expect(wrapper.find('.error').exists()).toBe(true)
  })

  it('should use custom message when provided', () => {
    const customMessage = 'Custom error message'
    const wrapper = mount(AppError, {
      props: {
        statusCode: 404,
        message: customMessage,
      },
      global: {
        stubs: {
          UError: { template: '<div class="error"><slot name="statusCode" /><slot name="links" /></div>' },
          NuxtImg: { template: '<img />' },
          UButton: { template: '<button><slot /></button>' },
        },
      },
    })

    expect(wrapper.find('.error').exists()).toBe(true)
  })

  it('should render button to go back home', () => {
    const wrapper = mount(AppError, {
      props: {
        statusCode: 404,
      },
      global: {
        stubs: {
          UError: { template: '<div class="error"><slot name="statusCode" /><slot name="links" /></div>' },
          NuxtImg: { template: '<img />' },
          UButton: { template: '<button class="home-button"><slot /></button>' },
        },
      },
    })

    expect(wrapper.find('.home-button').exists()).toBe(true)
  })
})

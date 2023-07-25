<template>
	<main class="login">
        <n-space justify="center">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Cubix Developer Portal Login</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Log in with an existing account</h6>
                    <n-form ref="formRef" :model="model" :rules="rules">
                        <n-form-item path="age" label="Age">
                            <n-input v-model:value="model.age" @keydown.enter.prevent />
                        </n-form-item>
                        <n-form-item path="password" label="Password">
                            <n-input
                            v-model:value="model.password"
                            type="password"
                            @input="handlePasswordInput"
                            @keydown.enter.prevent
                            />
                        </n-form-item>
                        <n-form-item
                            ref="rPasswordFormItemRef"
                            first
                            path="reenteredPassword"
                            label="Re-enter Password"
                        >
                            <n-input
                            v-model:value="model.reenteredPassword"
                            :disabled="!model.password"
                            type="password"
                            @keydown.enter.prevent
                            />
                        </n-form-item>
                        <n-row :gutter="[0, 24]">
                            <n-col :span="24">
                            <div style="display: flex; justify-content: flex-end">
                                <n-button
                                :disabled="model.age === null"
                                round
                                type="primary"
                                @click="handleValidateButtonClick"
                                >
                                Validate
                                </n-button>
                            </div>
                            </n-col>
                        </n-row>
                    </n-form>   
                    <pre>{{ JSON.stringify(model, null, 2) }}
                    </pre>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </n-space>
	</main>
</template>


<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { NButton, NSpace } from 'naive-ui'
  import {
    FormInst,
    FormItemInst,
    FormItemRule,
    FormValidationError,
    useMessage,
    FormRules
  } from 'naive-ui'
  
  interface ModelType {
    age: string | null
    password: string | null
    reenteredPassword: string | null
  }
  
  export default defineComponent({
    components: {
      NButton,
      NSpace
    },
    setup () {
      const formRef = ref<FormInst | null>(null)
      const rPasswordFormItemRef = ref<FormItemInst | null>(null)
      const message = useMessage()
      const modelRef = ref<ModelType>({
        age: null,
        password: null,
        reenteredPassword: null
      })
      function validatePasswordStartWith (
        rule: FormItemRule,
        value: string
      ): boolean {
        return (
          !!modelRef.value.password &&
          modelRef.value.password.startsWith(value) &&
          modelRef.value.password.length >= value.length
        )
      }
      function validatePasswordSame (rule: FormItemRule, value: string): boolean {
        return value === modelRef.value.password
      }
      const rules: FormRules = {
        age: [
          {
            required: true,
            validator (rule: FormItemRule, value: string) {
              if (!value) {
                return new Error('Age is required')
              } else if (!/^\d*$/.test(value)) {
                return new Error('Age should be an integer')
              } else if (Number(value) < 18) {
                return new Error('Age should be above 18')
              }
              return true
            },
            trigger: ['input', 'blur']
          }
        ],
        password: [
          {
            required: true,
            message: 'Password is required'
          }
        ],
        reenteredPassword: [
          {
            required: true,
            message: 'Re-entered password is required',
            trigger: ['input', 'blur']
          },
          {
            validator: validatePasswordStartWith,
            message: 'Password is not same as re-entered password!',
            trigger: 'input'
          },
          {
            validator: validatePasswordSame,
            message: 'Password is not same as re-entered password!',
            trigger: ['blur', 'password-input']
          }
        ]
      }
      return {
        formRef,
        rPasswordFormItemRef,
        model: modelRef,
        rules,
        handlePasswordInput () {
          if (modelRef.value.reenteredPassword) {
            rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
          }
        },
        handleValidateButtonClick (e: MouseEvent) {
          e.preventDefault()
          formRef.value?.validate(
            (errors: Array<FormValidationError> | undefined) => {
              if (!errors) {
                message.success('Valid')
              } else {
                console.log(errors)
                message.error('Invalid')
              }
            }
          )
        }
      }
    }
  })
  </script>

<style scoped>
.login {
    background-color: #ffbba1;
    background-image: url("@/assets/Login.svg");
}

.forms {
	display: flex;
	min-height: 100vh;
}

form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}

form.register {
	color: #FFF;
	background-color: rgb(245, 66, 101);
}

h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}

input {
	appearance: none;
	border: none;
	outline: none;
	background: none;

	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}

input:focus:not([type="submit"]) {
	opacity: 1;
}

input::placeholder {
	color: inherit;
}

form.register input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 2px solid #FFF;
}

form.login input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
	background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}

form.register input[type="submit"] {
	background-color: #FFF;
	color: rgb(245, 66, 101);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
</style>
<template>
  <div class="form">
    <div class="form__content">
      <h2>Замовити послугу</h2>
      <Form @submit="onSubmit" v-slot="{ errors }" ref="form" class="form__block">
        <div class="form__row">
          <label for="name">Ім'я:</label>
          <div class="input-wrapper" :class="{ 'has-error': errors.name }">
            <Field
                name="name"
                type="text"
                placeholder="Введіть ім'я"
                v-model="form.name"
                :rules="nameRules"
                :class="{ 'error-input': errors.name }"
            />
          </div>
          <ErrorMessage name="name" class="error"/>
        </div>

        <div class="form__row">
          <label for="surname">Прізвище:</label>
          <div class="input-wrapper" :class="{ 'has-error': errors.surname }">
            <Field
                name="surname"
                type="text"
                placeholder="Введіть прізвище"
                v-model="form.surname"
                :rules="nameRules"
                :class="{ 'error-input': errors.surname }"
            />
          </div>
          <ErrorMessage name="surname" class="error"/>
        </div>

        <div class="form__row">
          <label for="dealAmount">Сума угоди:</label>
          <div class="input-wrapper" :class="{ 'has-error': errors.dealAmount }">
            <Field
                name="dealAmount"
                type="text"
                placeholder="Введіть суму угоди"
                v-model="form.dealAmount"
                :rules="dealAmountRules"
                @input="restrictToNumbers($event, 'dealAmount')"
                :class="{ 'error-input': errors.dealAmount }"
            />
          </div>
          <ErrorMessage name="dealAmount" class="error"/>
        </div>

        <div class="form__row">
          <label for="taxId">Іпн:</label>
          <div class="input-wrapper" :class="{ 'has-error': errors.taxId }">
            <Field
                name="taxId"
                type="text"
                placeholder="Введіть ІПН"
                v-model="form.taxId"
                :rules="taxIdRules"
                @input="restrictToNumbers($event, 'taxId')"
                :class="{ 'error-input': errors.taxId }"
            />
          </div>
          <ErrorMessage name="taxId" class="error"/>
        </div>

        <div class="form__checkbox">
          <label class="custom-checkbox">
            <Field
                name="agreement"
                type="checkbox"
                v-model="form.agreement"
                :rules="agreementRules"
                :value="true"
                :unchecked-value="false"
                :class="{ 'error-input': errors.agreement }"
            />
            <span class="checkbox__mark"></span>
            Погоджуюсь з правилами та умовами
          </label>
          <ErrorMessage name="agreement" class="error"/>
        </div>

        <button type="submit" class="primary form__btn" @click.prevent="submitForm">Відправити</button>
      </Form>
    </div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage, defineRule} from 'vee-validate';
import {setupValidationRules} from  '@/validation/rules.js';

export default {
  name: 'FormComponent',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      form: {
        name: '',
        surname: '',
        taxId: '',
        dealAmount: '',
        agreement: false,
      },
      nameRules: 'required|cyrillic|length',
      taxIdRules: 'required|onlyNumbers|taxIdLength',
      dealAmountRules: 'onlyNumbers|dealAmountRange',
      agreementRules: 'agreementRequired',
    };
  },
  mounted() {
    setupValidationRules();
  },
  methods: {
    submitForm() {
      this.onSubmit();
    },
    restrictToNumbers(event, fieldName) {
      const value = event.target.value.replace(/\D/g, '');
      this.form[fieldName] = value;
    },
    onSubmit() {
      this.$refs.form
          .validate()
          .then((result) => {
            if (result.valid) {
              console.log('Valid');
              this.$refs.form.resetForm({
                values: {
                  name: '',
                  surname: '',
                  taxId: '',
                  dealAmount: '',
                  agreement: false,
                },
                errors: {},
              });
            } else {
              console.log('Invalid');
              const firstInvalidField = Object.keys(result.errors)[0];
              const fieldEl = this.$refs.form.$el.querySelector(`[name="${firstInvalidField}"]`);
              if (fieldEl) {
                const rect = fieldEl.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const centerPosition = scrollTop + rect.top - window.innerHeight / 2 + rect.height / 2;

                window.scrollTo({
                  top: centerPosition,
                  behavior: 'smooth',
                });
                fieldEl.focus();
              }
            }
          })
          .catch((error) => {
            console.error('Помилка валідації:', error);
          });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding-top: 95px;
  background: #fff;
  padding-bottom: 75px;
  margin: 0;

  &__content {
    width: 564px;
    margin: 0 auto;
  }

  &__checkbox {
    color: #666666;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin-top: 57px;
    display: flex;
    align-items: center;
    position: relative;

    label {
      height: 24px;
      display: flex;
      align-items: center;
    }

    input {
      width: 24px;
      height: 24px;
      border-radius: 8px;
      border: 1px solid #CCCCCC;
      margin-right: 16px;
    }
  }

  &__btn {
    margin: 32px auto 0;
  }

  h2 {
    color: #000;
    font-size: 36px;
    line-height: 24px;
    text-align: center;
    margin: 0 0 70px;
    padding: 0;
    font-weight: 700;
  }

  &__row {
    margin-bottom: 32px;
    position: relative;

    label {
      color: #666666;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      display: block;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      height: 56px;
      border-radius: 8px;
      padding: 16px;
      gap: 10px;
      border: 1px solid #CCCCCC;
      color: #000;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      &:focus{
        border: 1px solid #217bf4;
      }

      &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #666666;
      }
    }
  }
}

.center-block {
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: 400px 1fr;
}

.error {
  color: #EB5757;;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  position: absolute;
  bottom: -26px;
  display: block;
}

.input-wrapper {
  position: relative;
}

.input-wrapper.has-error:before {
  content: '';
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-image: url('@/assets/images/error.png');
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
}

.form__row input.error-input {
  border: 2px solid #EB5757;
}

.form__checkbox input{
  display: none;
}

.custom-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox__mark {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  border: 1px solid #CCCCCC;
  margin-right: 16px;
  position: relative;
  transition: all 0.3s ease;
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox__mark {
  border-color: #CCCCCC;
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox__mark::after {
  content: '';
  position: absolute;
  left: 3px;
  top: 2px;
  width: 16px;
  height: 17px;
  background-image: url('@/assets/images/checked.svg');
  background-size: 16px;
  background-position: center;
  background-repeat: no-repeat;
}

.error-input + .checkbox__mark {
  border-color: #ff0000;
}

.error {
  color: #ff0000;
  font-size: 12px;
  margin-top: 5px;
}

</style>

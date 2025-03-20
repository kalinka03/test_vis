import { defineRule } from 'vee-validate';

export const setupValidationRules = () => {
    defineRule('required', (value) => {
        if (!value || value.trim() === '') {
            return 'Поле обов’язкове до заповнення';
        }
        return true;
    });

    defineRule('cyrillic', (value) => {
        if (!value) return 'Поле обов’язкове до заповнення';
        if (!/^[А-ЯҐЄІЇа-яґєії]+(['-][А-ЯҐЄІЇа-яґєії]+)*$/.test(value)) {
            return 'Дозволена тільки кирилиця, апостроф або дефіс всередині слова';
        }
        return true;
    });

    defineRule('length', (value) => {
        if (value.length < 1 || value.length > 38) {
            return 'Довжина має бути від 1 до 38 символів';
        }
        return true;
    });

    defineRule('taxIdLength', (value) => {
        if (value.length < 8 || value.length > 10) {
            return 'Довжина має бути від 8 до 10 символів';
        }
        return true;
    });

    defineRule('onlyNumbers', (value) => {
        if (!value) return true;
        if (!/^\d+$/.test(value)) {
            return 'Дозволені тільки цифри';
        }
        return true;
    });

    defineRule('dealAmountRange', (value) => {
        if (!value) return true;
        const numValue = parseInt(value, 10);
        if (numValue < 1000 || numValue > 1000000) {
            return 'Сума має бути від 1000 до 1000000';
        }
        return true;
    });

    defineRule('agreementRequired', (value) => {
        if (value !== true) {
            return 'Необхідно погодитись з умовами';
        }
        return true;
    });
};

import {
    withKnobs, select, text
} from '@storybook/addon-knobs';
import FormField from '../src/components/FormField.vue';
import { VALID_INPUT_TYPES, VALID_LABEL_STYLES } from '../src/constants';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Components/Atoms',
    decorators: [withKnobs, withA11y]
};

export const FormFieldComponent = () => ({
    components: { FormField },
    props: {
        locale: {
            default: select('Locale', ['en-GB', 'en-AU'])
        },
        labelText: {
            default: text('Label Text', 'First Name')
        },
        inputType: {
            default: select('Input Type', VALID_INPUT_TYPES)
        },
        labelStyle: {
            default: select('Label Style', VALID_LABEL_STYLES)
        }
    },
    parameters: {
        notes: 'some documentation here'
    },
    template:
        '<form-field :locale="locale" :labelText="labelText" :inputType="inputType" :labelStyle="labelStyle" />'
});

FormFieldComponent.storyName = 'f-form-field';

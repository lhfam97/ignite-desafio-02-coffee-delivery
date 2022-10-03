import { Bank, CreditCard, Money } from 'phosphor-react'
import { Controller, useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'
import {
  TransactionType,
  TransactionTypeButton,
  PaymentMethodContainer,
} from './styles'

export const PaymentMethodInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <Controller
      control={control}
      name="paymentMethod"
      render={({ field }) => {
        return (
          <PaymentMethodContainer>
            <TransactionType onValueChange={field.onChange} value={field.value}>
              <TransactionTypeButton value="credit">
                <CreditCard size={16} />
                Cartão de Crédito
              </TransactionTypeButton>
              <TransactionTypeButton value="debit">
                <Bank size={16} />
                Cartão de Débito
              </TransactionTypeButton>
              <TransactionTypeButton value="money">
                <Money size={16} />
                Dinheiro
              </TransactionTypeButton>
            </TransactionType>
            {paymentMethodError && (
              <RegularText className="form-error">
                {paymentMethodError}
              </RegularText>
            )}
          </PaymentMethodContainer>
        )
      }}
    />
  )
}

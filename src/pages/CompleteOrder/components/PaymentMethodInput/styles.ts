import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const PaymentMethodContainer = styled.div`
  .form-error {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors['base-error']};
  }
`
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`
export const TransactionTypeButton = styled(RadioGroup.Item)`
  background: ${({ theme }) => theme.colors['base-button']};
  height: 3rem;
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors['base-text']};
  transition: background border 0.4s;
  border: 1px solid transparent;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
  &[data-state='checked'] {
    background: ${({ theme }) => theme.colors['brand-purple-light']};
    border: 1px solid ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`

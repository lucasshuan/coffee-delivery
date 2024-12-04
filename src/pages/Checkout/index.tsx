import { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaBuildingColumns,
  FaCreditCard,
  FaDollarSign,
  FaMoneyBill,
} from "react-icons/fa6";
import { CartContext, PaymentMethod } from "../../contexts/CartContext";
import {
  AddressSection,
  CEPInput,
  CityPart,
  CompletionInfo,
  CompletionInfoBlock,
  Container,
  ItemSelection,
  NumberPart,
  OrderForm,
  OrderInfo,
  PaymentMethodButton,
  PaymentMethodGroup,
  PaymentMethodSection,
  SectionTitle,
  SubmitButton,
  TotalValues,
} from "./styles";
import SelectedItem from "./fragments/SelectedItem";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toBRL } from "../../utils/currency";
import { useNavigate } from "react-router-dom";

const checkoutFormSchema = z.object({
  zipCode: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  paymentMethod: z.nativeEnum(PaymentMethod),
});

type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

export default function Checkout() {
  const navigate = useNavigate();
  const { items, createOrder, total, deliveryFee, itemsTotal } =
    useContext(CartContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      state: "",
      paymentMethod: PaymentMethod.CREDIT_CARD,
    },
  });

  function handleCreateOrder(data: CheckoutFormData) {
    createOrder(data);
    navigate("/success");
  }

  return (
    <Container>
      <OrderForm onSubmit={handleSubmit(handleCreateOrder)}>
        <OrderInfo>
          <h2>Complete seu pedido</h2>
          <AddressSection>
            <SectionTitle color={"var(--yellow-dark)"}>
              <FaMapMarkerAlt size={16} />
              <div>
                <h3>Endereço de entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </SectionTitle>
            <CEPInput
              type="text"
              placeholder="CEP"
              autoComplete="off"
              required
              {...register("zipCode")}
            />
            <input
              type="text"
              placeholder="Rua"
              autoComplete="off"
              required
              {...register("street")}
            />
            <NumberPart>
              <input
                type="text"
                placeholder="Número"
                autoComplete="off"
                {...register("number")}
              />
              <input
                type="text"
                placeholder="Complemento"
                autoComplete="off"
                {...register("complement")}
              />
            </NumberPart>
            <CityPart>
              <input
                type="text"
                placeholder="Bairro"
                autoComplete="off"
                required
                {...register("district")}
              />
              <input
                type="text"
                placeholder="Cidade"
                autoComplete="off"
                required
                {...register("city")}
              />
              <input
                type="text"
                placeholder="UF"
                autoComplete="off"
                required
                {...register("state")}
              />
            </CityPart>
          </AddressSection>
          <PaymentMethodSection>
            <SectionTitle color={"var(--purple)"}>
              <FaDollarSign size={16} />
              <div>
                <h3>Pagamento</h3>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </SectionTitle>
            <Controller
              control={control}
              name="paymentMethod"
              render={({ field }) => {
                return (
                  <PaymentMethodGroup
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <PaymentMethodButton
                      checked={field.value === PaymentMethod.CREDIT_CARD}
                      value={PaymentMethod.CREDIT_CARD}
                    >
                      <FaCreditCard size={14} />
                      <span>CARTÃO DE CRÉDITO</span>
                    </PaymentMethodButton>
                    <PaymentMethodButton
                      checked={field.value === PaymentMethod.DEBIT_CARD}
                      value={PaymentMethod.DEBIT_CARD}
                    >
                      <FaBuildingColumns size={14} />
                      <span>CARTÃO DE DÉBITO</span>
                    </PaymentMethodButton>
                    <PaymentMethodButton
                      checked={field.value === PaymentMethod.MONEY}
                      value={PaymentMethod.MONEY}
                    >
                      <FaMoneyBill size={14} />
                      <span>DINHEIRO</span>
                    </PaymentMethodButton>
                  </PaymentMethodGroup>
                );
              }}
            />
          </PaymentMethodSection>
        </OrderInfo>
        <CompletionInfo>
          <h2>Cafés selecionados</h2>
          <CompletionInfoBlock>
            <ItemSelection>
              {items.map((_, index) => (
                <SelectedItem key={index} index={index} />
              ))}
            </ItemSelection>
            <TotalValues>
              <div>
                <span>Total de itens</span>
                <span>{toBRL(itemsTotal)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>{toBRL(deliveryFee)}</span>
              </div>
              <div>
                <span>Total</span>
                <span>{toBRL(total)}</span>
              </div>
            </TotalValues>
            <SubmitButton type="submit" disabled={isSubmitting}>
              CONFIRMAR PEDIDO
            </SubmitButton>
          </CompletionInfoBlock>
        </CompletionInfo>
      </OrderForm>
    </Container>
  );
}

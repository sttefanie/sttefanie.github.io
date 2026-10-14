# Mensuração de conversão

O site é estático e não tem GA4, outra ferramenta de analytics, formulário com backend ou checkout. Nenhum evento é enviado a terceiros.

## Eventos recomendados

| Evento              | Quando registrar                           | Parâmetros permitidos                                                         |
| ------------------- | ------------------------------------------ | ----------------------------------------------------------------------------- |
| `primary_cta_click` | Clique em “Quero simplificar minha rotina” | `placement: hero` ou `placement: plano`                                       |
| `whatsapp_click`    | Clique em qualquer link `wa.me`            | `placement` e `offer` (`plano`, `mentoria`, `diagnostico`, `geral`)           |
| `email_click`       | Clique em link `mailto:`                   | `placement`                                                                   |
| `linkedin_click`    | Clique no LinkedIn                         | `placement`                                                                   |
| `faq_open`          | Expansão de pergunta frequente             | `question_id` estático, sem texto escrito pelo visitante                      |
| `form_submit`       | Não aplicável                              | O formulário foi removido; não contar abertura de e-mail como envio concluído |
| `purchase`          | Não aplicável                              | Habilitar somente após checkout e confirmação real de pagamento               |

## Como habilitar

1. Escolher uma ferramenta de analytics e configurar propriedade, privacidade, consentimento aplicável e retenção de dados.
2. Inserir o identificador real somente depois da configuração. Não publicar IDs de exemplo.
3. Implementar eventos de clique com parâmetros fixos. Não transmitir nome, e-mail, telefone, mensagem ou outros dados pessoais.
4. Testar em modo de depuração e conferir que os eventos não sejam contados duas vezes.
5. Não implementar `purchase` até existir checkout com confirmação confiável do pagamento.

## Decisões comerciais pendentes

Preço, prazo de entrega, condições de pagamento, escopo fechado e processo de contratação do Plano Digital, Mentoria e Diagnóstico não estão definidos nos arquivos nem no histórico consultado. A página informa isso e direciona para alinhamento via WhatsApp, sem publicar valores ou prazos presumidos.

import { useForm } from 'react-hook-form'
import { sendContactMail } from '../../services/sendMail'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { ButtonSecondary } from '../../styles/styles'
import { FormContent } from './styles'
import { At, ChatText, TelegramLogo, User, Phone } from 'phosphor-react'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z
    .string()
    .length(10)
    .regex(/^\d{10}$/),
  message: z.string().min(2).max(1000)
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactMail(data.name, data.email, data.phone, data.message)
      toast.success('Message sent successfully.')
      reset()
    } catch (error) {
      toast.error('An error occurred while sending the message. Please try again!')
    }
  }

  return (
    <FormContent onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <input {...register('name')} placeholder=" " className="input" required />
        <label className="user-label">
          Name <span><User size={15} weight="bold" /></span>
        </label>
        {errors.name && <p className="error">Name is required (min 3 characters)</p>}
      </div>

      <div className="input-group">
        <input {...register('email')} type="email" placeholder=" " className="input" required />
        <label className="user-label">
          Email <span><At size={15} weight="bold" /></span>
        </label>
        {errors.email && <p className="error">Invalid email address</p>}
      </div>

      <div className="input-group">
        <input {...register('phone')} type="phone" placeholder=" " className="input" required />
        <label className="user-label">
          Phone <span><Phone size={15} weight="bold" /></span>
        </label>
        {errors.phone && <p className="error">Invalid phone number</p>}
      </div>

      <div className="input-group">
        <textarea {...register('message')} placeholder=" " className="input" required />
        <label className="user-label">
          Message <span><ChatText size={15} weight="bold" /></span>
        </label>
        {errors.message && <p className="error">Message is required (min 2 characters)</p>}
      </div>

      <ButtonSecondary type="submit">
        Submit <TelegramLogo size={15} weight="bold" />
      </ButtonSecondary>
    </FormContent>
  )
}

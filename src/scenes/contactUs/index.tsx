import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
  const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  const { register, trigger, formState: { errors } }  = useForm();

  const onSubmit = async (e:any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header  */}
        <motion.div
          className="md:w-3/5"
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: { opacity: 0, x:-50},
            visible: { opacity:1, x: 0},
          }}
        >
          <HText>
            <span className="text-primary-500"> JOIN NOW </span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* form and images  */}
        <div className="mt-10 justify-between gap-8 md:flex">
          {/* form  */}
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x:50},
              visible: { opacity:1, x: 0},
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/trisnm102@gmail.com"
              method="POST"
            >
              <input className={inputStyle} type="text" placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required!"}
                  {errors.name.type === "maxLength" && "Maxlength is 100 characters!"}
                </p>
              )}

              <input className={inputStyle} type="text" placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required!"}
                  {errors.email.type === "pattern" && "Invalid email address!"}
                </p>
              )}

              <input className={inputStyle} type="text" placeholder="Message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "This field is required!"}
                  {errors.message.type === "maxLength" && "Maxlength is 2000 characters!"}
                </p>
              )}
            </form>
          </motion.div>
          {/* image  */}
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
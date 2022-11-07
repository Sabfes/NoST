import React, {useRef, useState} from "react"
import styles from './InputField.module.css'

const InputField = ({
  type = 'text',
  placeholder = 'label',
  value,
  setValue,
}) => {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)

  // Input type - TEXTAREA -
  if (type === 'textarea') {
    return <div onClick={() => {
      setIsActive(true)
      ref.current.focus()
    }}
                onBlur={() => {
                  setIsActive(false)
                }}  className={styles.textArea}>
      <label htmlFor="textArea"
             className={`${styles.Input__label} ${(isActive || value !== '') && styles.Input_active}`}
      >{placeholder}</label>
      <textarea onChange={(e) => setValue(e.target.value)} ref={ref} name="textArea" value={value}/>
    </div>
  }


  // Input type - TEXT -
  return <div className={styles.Container}
    onClick={() => {
      setIsActive(true)
      ref.current.focus()
    }}
    onBlur={() => {
      setIsActive(false)
    }}
  >
    <label
      className={`${styles.Input__label} ${(isActive || value !== '') && styles.Input_active}`}
      htmlFor="input"
    >
      {placeholder}
    </label>
    <input
      ref={ref}
      className={styles.Input}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
}
export default InputField
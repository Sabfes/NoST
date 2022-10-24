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
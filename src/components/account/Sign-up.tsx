import theme from "../discover/theme"
import { ThemeProvider, TextField, InputAdornment, IconButton, OutlinedInput, Checkbox } from "@mui/material"
import styles from "./account.module.scss"
import { useState } from "react"
import visabilityOff from "@public/visability-off.png"
import visabilityOn from "@public/visability-on.png"
import box from "@public/box.png"
import boxChecked from "@public/box-checked.png"
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom"

interface ISignUpInputValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    showPassword: boolean;
    terms: boolean;
}

export default function SignUp() {
    const { control, handleSubmit, watch, formState: { errors, isValid } } = useForm<ISignUpInputValues>({
        mode: "onBlur", // Ошибки отображаются только после потери фокуса
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            terms: false,
        },
    });

    const [values, setValues] = useState<ISignUpInputValues>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        showPassword: false,
        terms: false
    });

    const onSubmit = (data: ISignUpInputValues) => {
        console.log("Form Data:", data);
    };

    const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword });

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return <ThemeProvider theme={theme}>
        <div className={styles.wrapper}>
            <section className={styles.sign}>
                <h1 className={styles.account__heading}>Sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.account__item}>
                        <div>
                            <label htmlFor="first-name" className={styles["account__item-label"]}>Fisrt name</label>
                            <Controller
                                name="firstName"
                                control={control}
                                rules={{ required: "First name is required." }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        placeholder="Enter your name"
                                        variant="outlined"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName?.message}
                                        className={`${styles["account__item-texfiled"]}`}
                                        slotProps={{
                                            formHelperText: {
                                                sx: {
                                                    fontFamily: '"m plus 1p regular"',
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </div>

                        <div>
                            <label htmlFor="last-name" className={styles["account__item-label"]}>Last name</label>
                            <Controller
                                name="lastName"
                                control={control}
                                rules={{ required: "Last name is required." }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        placeholder="Enter your last name"
                                        variant="outlined"
                                        error={!!errors.lastName}
                                        helperText={errors.lastName?.message}
                                        className={`${styles["account__item-texfiled"]}`}
                                        slotProps={{
                                            formHelperText: {
                                                sx: {
                                                    fontFamily: '"m plus 1p regular"',
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className={styles.account__item}>
                        <div>
                            <label htmlFor="email" className={styles["account__item-label"]}>Your email</label>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                                        message: "Enter a valid email.",
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        placeholder="Enter your email"
                                        variant="outlined"
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        className={`${styles["account__item-texfiled"]}`}
                                        slotProps={{
                                            formHelperText: {
                                                sx: {
                                                    fontFamily: '"m plus 1p regular"',
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <div className={styles.account__item}>
                        <div>
                            <label htmlFor="password" className={styles["account__item-label"]}>Your password</label>

                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: "Password is required.",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters.",
                                    },
                                }}
                                render={({ field }) => (
                                    <OutlinedInput
                                        {...field}
                                        placeholder="Create password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        fullWidth
                                        className={`${styles["account__item-texfiled"]}`}
                                        error={!!errors.password}
                                        sx={{
                                            height: "44px",
                                            marginTop: "8px",
                                            "& .MuiOutlinedInput-root": {
                                                background: !!errors.password ? "#f7eceb" : "inherit"
                                            },
                                        }}
                                        endAdornment={
                                            <InputAdornment style={{ marginTop: 0 }} position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    onMouseUp={handleMouseUpPassword}
                                                >
                                                    <img src={values.showPassword ? visabilityOff : visabilityOn} className={styles["account__textfield-icon"]} />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                )}
                            />
                            {errors.password && <span className={styles.error}>{errors.password.message}</span>}

                        </div>
                    </div>

                    <div className={`${styles.account__item} ${styles["account__item-terms"]}`}>
                        <Controller
                            name="terms"
                            control={control}
                            rules={{ required: "You must agree to the terms." }}
                            render={({ field }) => (
                                <Checkbox
                                    {...field}
                                    sx={{ padding: 0 }}
                                    icon={<img src={box} style={{ minWidth: 17, height: 17 }} alt="box" />}
                                    checkedIcon={<img src={boxChecked} style={{ minWidth: 17, height: 17 }} alt="boxChecked" />}
                                    checked={watch("terms")}
                                />
                            )}
                        />
                        <span>I agree with <a className={styles["account__item-terms_link"]}>Terms </a>and <a className={styles["account__item-terms_link"]}>Privacy Policy</a></span>
                        {errors.terms && <span className={styles.error}>{errors.terms.message}</span>}
                    </div>
                    <button type="submit" className={styles.account__button} disabled={!isValid}>Create account</button>
                </form>

                <div className={styles["account__item-other-option"]}>Already have an account? <Link to={"/auth/log-in"} className={styles["account__item-terms_link"]}>Log in </Link></div>
            </section>
        </div>
        <div style={{ background: "rgba(227, 237, 253, 1)" }}>
            <footer className={styles.footer}>
                <div>© 2020 - {new Date().getFullYear()} Mindbase® Global Inc. • Privacy Policy</div>
            </footer>
        </div>
    </ThemeProvider>
}
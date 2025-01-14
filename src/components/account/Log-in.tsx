import theme from "../discover/theme"
import { ThemeProvider, TextField, InputAdornment, IconButton, OutlinedInput, Checkbox } from "@mui/material"
import styles from "./account.module.scss"
import { useState } from "react"
import visabilityOff from "@public/visability-off.png"
import visabilityOn from "@public/visability-on.png"
import box from "@public/box.png"
import boxChecked from "@public/box-checked.png"
import { useForm, Controller } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import googleIcon from "@public/google-icon.png"
import facebookIcon from "@public/facebook-icon.png"
import { Link } from "react-router-dom"

interface ILogInInputvalues {
    email: string;
    password: string;
    showPassword: boolean;
    remember: boolean;
}

export default function LogIn() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<ILogInInputvalues>({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [values, setValues] = useState<ILogInInputvalues>({
        email: "",
        password: "",
        showPassword: false,
        remember: false
    });

    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
    });

    const onSubmit = (data: ILogInInputvalues) => {
        console.log("Form Data:", data);
    };

    const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword });

    const handleRememberChange = () => setValues({ ...values, remember: !values.remember })

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleFacebookResponse = (response: any) => {
        console.log("Facebook Login Response:", response);
    };

    return <ThemeProvider theme={theme}>
        <div className={`${styles.wrapper} ${styles["wrapper_sign-in"]}`}>
            <section className={`${styles.sign} ${styles.account_in}`}>
                <h1 className={styles.account__heading}>Log in</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.account__item}>
                        <div>
                            <label htmlFor="email" className={styles["account__item-label"]}>Your email</label>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email."
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
                                rules={{ required: "Password is required.", minLength: { value: 6, message: "Password must be at least 6 characters." } }}
                                render={({ field }) => (
                                    <OutlinedInput
                                        {...field}
                                        placeholder="Enter your password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        fullWidth
                                        error={!!errors.password}
                                        sx={{
                                            height: "44px", marginTop: "8px",
                                            background: !!errors.password ? "#f7eceb" : "inherit",
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
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

                        <Checkbox
                            sx={{ padding: 0 }}
                            icon={<img src={box} style={{ minWidth: 17, height: 17 }} alt="box" />}
                            checkedIcon={<img src={boxChecked} style={{ minWidth: 17, height: 17 }} alt="boxChecked" />}
                            checked={values.remember === true}
                            onClick={handleRememberChange}
                        />
                        <span>remember me</span>
                        <Link to={"/auth/forgot-password"} style={{ margin: "0 0 0 auto" }} className={styles["account__item-terms_link"]}>Forgot password?</Link>
                    </div>

                    <button type="submit" className={styles.account__button} disabled={!isValid}>Continue</button>
                </form>

                <div className={styles["disconnector"]}>
                    <div className={styles["disconnector__line"]} />
                    <div className={styles["disconnector__title"]}>Or</div>
                    <div className={styles["disconnector__line"]} />
                </div>

                <button onClick={() => login()} className={styles.account__button_2}><img src={googleIcon} alt="google-icon" /><span>Continue with Google</span></button>

                <FacebookLogin
                    appId="facebook_app_id"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={handleFacebookResponse}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className={styles.account__button_2}><img src={facebookIcon} alt="facebook-icon" /><span>Continue with Facebook</span></button>
                    )}
                />

                <div className={styles["account__item-other-option"]}>Don't have an account? <Link to={"/auth/sign-up"} className={styles["account__item-terms_link"]}>Sign up </Link></div>
            </section>
        </div>

        <div style={{ background: "rgba(248, 247, 246, 1)" }}>
            <footer className={`${styles.footer} ${styles["footer_sign-in"]}`}>
                <div>© 2020 - {new Date().getFullYear()} Mindbase® Global Inc. • Privacy Policy</div>
            </footer>
        </div>
    </ThemeProvider>
}
import theme from "../discover/theme"
import { ThemeProvider, TextField } from "@mui/material"
import styles from "./account.module.scss"
import { useForm, Controller } from "react-hook-form";
import arrow from "@public/arrow-left.png"
import { Link } from "react-router-dom";
import passwordMail from "@public/mail-password.png"
import passwordKey from "@public/password-key.png"
import { useNavigate } from "react-router-dom";

interface IForgotPasswordValues {
    email: string;
}

export default function ForgotPassword() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IForgotPasswordValues>({
        mode: "onBlur",
        defaultValues: {
            email: ""
        },
    });

    const navigate = useNavigate();

    const onSubmit = (data: IForgotPasswordValues) => {
        console.log("Form Data:", data);
        navigate("/auth/mail-sent");
    };

    return <ThemeProvider theme={theme}>
        <div className={`${styles.wrapper} ${styles["wrapper_sign-in"]}`}>
            <section className={`${styles.sign} ${styles["account_forgot-password"]}`}>
                <h1 className={styles.account__heading}>Forgot password?</h1>
                <p className={styles.account__text}>
                    To recover your password, enter the email address you used to register your account. <br />
                    We will send you a link to reset your password.
                </p>
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

                    <button type="submit" className={styles.account__button} disabled={!isValid}>Reset password</button>
                </form>

                <Link to="/auth/log-in" className={styles.account__back}>
                    <img src={arrow} alt="arrow-left" />
                    <span>Back to log in</span>
                </Link>

                <img src={passwordKey} className={styles["account__password-icon_1"]} />
                <img src={passwordMail} className={styles["account__password-icon_2"]} />

                <div className={styles.account__background} />
            </section>
        </div>

        <div style={{ background: "rgba(248, 247, 246, 1)" }}>
            <footer className={`${styles.footer} ${styles["footer_sign-in"]}`}>
                <div>© 2020 - {new Date().getFullYear()} Mindbase® Global Inc. • Privacy Policy</div>
            </footer>
        </div>
    </ThemeProvider>
}
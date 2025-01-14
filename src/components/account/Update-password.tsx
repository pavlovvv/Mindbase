import theme from "../discover/theme"
import { ThemeProvider, InputAdornment, IconButton, OutlinedInput } from "@mui/material"
import styles from "./account.module.scss"
import { useForm, Controller } from "react-hook-form";
import passwordMail from "@public/mail-password.png"
import passwordKey from "@public/password-key.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import visabilityOff from "@public/visability-off.png"
import visabilityOn from "@public/visability-on.png"

interface IUpdatePassowrdValues {
    newPassword: string;
    confirmPassword: string;
    showPassword: boolean;
}

export default function UpdatePassword() {
    const { control, handleSubmit, watch, formState: { errors, isValid } } = useForm<IUpdatePassowrdValues>({
        mode: "onBlur",
        defaultValues: {
            newPassword: "",
            confirmPassword: ""
        },
    });

    const [values, setValues] = useState<IUpdatePassowrdValues>({
        newPassword: "",
        confirmPassword: "",
        showPassword: false,
    });

    const navigate = useNavigate();

    const onSubmit = (data: IUpdatePassowrdValues) => {
        console.log("Form Data:", data);
        navigate("/", { state: { showNotification: true } });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword });

    return <ThemeProvider theme={theme}>
        <div className={`${styles.wrapper} ${styles["wrapper_sign-in"]}`}>
            <section className={`${styles.sign} ${styles["account_forgot-password"]}`}>
                <h1 className={styles.account__heading}>Update password</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={`${styles.account__item} ${styles.account__item_w426}`}>
                        <div>
                            <label htmlFor="newPassword" className={styles["account__item-label"]}>New password</label>
                            <Controller
                                name="newPassword"
                                control={control}
                                rules={{ required: "New password is required.", minLength: { value: 6, message: "Password must be at least 6 characters." } }}
                                render={({ field }) => (
                                    <OutlinedInput
                                        {...field}
                                        placeholder="Create password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        fullWidth
                                        error={!!errors.newPassword}
                                        sx={{
                                            height: "44px", marginTop: "8px",
                                            background: !!errors.newPassword ? "#f7eceb" : "inherit",
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
                            {errors.newPassword && <span className={styles.error}>{errors.newPassword.message}</span>}
                        </div>
                    </div>

                    <div className={`${styles.account__item} ${styles.account__item_w426}`}>
                        <div>
                            <label htmlFor="confirmPassword" className={styles["account__item-label"]}>Confirm password</label>
                            <Controller
                                name="confirmPassword"
                                control={control}
                                rules={{
                                    required: "Confirm password is required.",
                                    minLength: { value: 6, message: "Password must be at least 6 characters." },
                                    validate: value =>
                                        value === watch("newPassword") || "*Password don't match. Please double-check and try again."
                                }}
                                render={({ field }) => (
                                    <OutlinedInput
                                        {...field}
                                        type={'text'}
                                        fullWidth
                                        error={!!errors.confirmPassword}
                                        sx={{
                                            height: "44px", marginTop: "8px",
                                            background: !!errors.confirmPassword ? "#f7eceb" : "inherit",
                                        }}
                                    />
                                )}
                            />
                            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
                        </div>
                    </div>

                    <button type="submit" className={styles.account__button} disabled={!isValid}>Set new password</button>
                </form>

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
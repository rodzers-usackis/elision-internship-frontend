import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {register} from "../../services/api/authentication";
import {RegistrationForm} from "../../model/RegistrationForm";
import {AuthenticationResponse} from "../../types/AuthenticationResponse";

export function useRegisterUser() {
    return useMutation({
        mutationFn: (registrationForm: RegistrationForm) => register(registrationForm),
    } as UseMutationOptions<AuthenticationResponse, Error, RegistrationForm>)
}
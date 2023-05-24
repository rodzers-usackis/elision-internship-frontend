import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {RegisteringUser} from '../../model/RegisteringUser';
import {registerUser} from "../../services/api/authentication";

export function useRegisterUser() {
    return useMutation({
        mutationFn: (registrationForm: RegistrationForm) => registerUser(registrationForm),
    } as UseMutationOptions<AuthenticatorResponse, Error, RegistrationForm>)
}
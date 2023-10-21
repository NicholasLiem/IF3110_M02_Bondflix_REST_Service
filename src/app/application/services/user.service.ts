import {User} from '@prisma/client';
import {UserRepository} from "../../interfaces/repositories/user.repository";

/**
 * What to do in Services:
 * 1. Implement Business Logic
 * 2. Handle Database Operations
 * 3. Enforce Business Rules
 * 4. Don't Access HTTP Request/Response
 * 5. Validate / Sanitize Input using Zod
 */
export class UserService implements UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async authenticate(identifier: string, password: string) : Promise<User | null> {
        return {
            id: 1,
            username: "test",
            name: "test",
            email: "test",
            hashedPassword: "test"
        };
    }

}

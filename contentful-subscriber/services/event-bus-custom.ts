import { EmitData, EventBusTypes } from "@medusajs/types"
import { AbstractEventBusModuleService } from "@medusajs/utils"

class CustomEventBus extends AbstractEventBusModuleService {
    // @ts-ignore
    async emit<T>(
        eventName: string,
        data: T,
        options: Record<string, unknown>
    ): Promise<void>;
    // @ts-ignore
    async emit<T>(data: EmitData<T>[]): Promise<void>;
    // @ts-ignore
    async emit(
        eventName: unknown,
        data?: unknown,
        options?: unknown
    ): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

export default CustomEventBus
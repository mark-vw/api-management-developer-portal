import { IInjector, IInjectorModule } from "@paperbits/common/injection";
import { GraphQLConsoleRuntime } from "./graphql-console";

export class GraphQLRuntimeModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("graphqlConsoleRuntime", GraphQLConsoleRuntime);
    }
}
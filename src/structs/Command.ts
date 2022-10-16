export class Command<T, Y> {
    public name: string;
    public description: string;
    public run: (interaction: T) => Y;
}
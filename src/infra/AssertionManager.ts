export class AssertionManager {
    private errors: string[] = [];

    softAssert(condition: boolean, message: string) {
        if (!condition) {
            this.errors.push(message);
        }
    }

    verifyAll() {
        if (this.errors.length > 0) {
            throw new Error(`Assertion errors:\n${this.errors.join('\n')}`);
        }
    }
}

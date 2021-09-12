interface EditDistanceCalculation {
    calculateDistance(): number;
}

class EditDistanceCalculator implements EditDistanceCalculation {
    private grid: number[][] = [];

    constructor(private readonly source: string, private readonly target: string) {}

    calculateDistance(): number {
        this.addSourceAsRows();
        this.addTargetAsColumns();

        for (let j = 1; j <= this.target.length; ++j) {
            for (let i = 1; i <= this.source.length; ++i) {
                this.grid[i][j] = this.calculateCellValue(i, j);
            }
        }
        return this.grid[this.source.length][this.target.length];
    }

    private addSourceAsRows(): void {
        for (let i = 0; i <= this.source.length; ++i) {
            this.grid[i] = [i];
        }
    }

    private addTargetAsColumns(): void {
        for (let i = 0; i <= this.target.length; ++i) {
            this.grid[0][i] = i;
        }
    }

    private calculateCellValue(i: number, j: number): number {
        let cell = this.grid[i][j];
        if (this.source[i - 1] === this.target[j - 1]) {
            cell = this.grid[i - 1][j - 1];
        }
        else {
            cell = Math.min.apply(Math, [
                this.grid[i - 1][j] + 1,    // deletion
                this.grid[i][j - 1] + 1,    // insertion
                this.grid[i - 1][j - 1] + 1 // substitution
            ]);
        }
        return cell;
    }
}

class EditDistance {
    constructor(private readonly distCalculator: EditDistanceCalculation) {}

    calculate(): number {
        return this.distCalculator.calculateDistance();
    }
}
/** Returns the edit distance between strings A and B, or the minimum number of additions, deletions and substitutions needed to change A into B. */
export function eddist(a: string, b: string): number {
    if (typeof a !== 'string') {
        throw new Error('Parameter a must be of type string');
    }
    if (typeof b !== 'string') {
        throw new Error('Parameter b must be of type string');
    }
    return new EditDistance(
        new EditDistanceCalculator(a, b))
        .calculate();
}

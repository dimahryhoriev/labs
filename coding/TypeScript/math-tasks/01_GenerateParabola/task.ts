interface Point {
    x: number,
    y: number,
}

interface Parabola {
    leftBranch: Point[],
    rightBranch: Point[],
    vertex: Point,
}

interface GenerateParabola {
    (vertex: Point, count?: number, a?: number): Parabola;
}

const generateParabolaPoints: GenerateParabola = (vertex, count = 4, a = 1) => {
    let parabolaPoints: Parabola =
    {
        leftBranch: [],
        rightBranch: [],
        vertex,
    };

    for (let step = 1; step <= count; step++) {
        const rightX = vertex.x + step;
        const leftX = vertex.x - step;
        const calculatedY = a * Math.pow(step, 2) + vertex.y;

        parabolaPoints.rightBranch.push({ x: rightX, y: calculatedY });
        parabolaPoints.leftBranch.push({ x: leftX, y: calculatedY });
    }

    return parabolaPoints;
}

console.log(generateParabolaPoints({ x: -4, y: -10 }, 3))
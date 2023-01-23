export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'union square'];

    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;

    };
}

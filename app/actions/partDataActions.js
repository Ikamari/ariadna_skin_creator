export const writePartData = (data, part) => ({
    type: "WRITE_PART_DATA",
    payload: {
        data: data,
        part: part
    }
});
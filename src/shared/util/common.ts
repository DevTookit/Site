function converterJson(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export { converterJson };

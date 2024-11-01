"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegisterForTransaction = exports.createRegister = void 0;
async function createRegister(repository, data) {
    const register = repository.create(data);
    return await repository.save(register);
}
exports.createRegister = createRegister;
async function createRegisterForTransaction(data, manager, entity) {
    const repo = manager.getRepository(entity);
    await repo.create(data);
    return repo.save(data);
}
exports.createRegisterForTransaction = createRegisterForTransaction;
//# sourceMappingURL=create.helper.js.map
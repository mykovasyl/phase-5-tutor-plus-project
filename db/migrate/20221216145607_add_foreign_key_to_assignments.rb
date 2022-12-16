class AddForeignKeyToAssignments < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :assignments, :tutor_students, column: :id
  end
end

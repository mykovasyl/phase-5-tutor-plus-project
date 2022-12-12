class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :subjects
      t.string :headline
      t.string :name
      t.string :grade
      t.attachment :avatar

      t.timestamps
    end
  end
end
